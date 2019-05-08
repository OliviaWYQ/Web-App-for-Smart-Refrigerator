//
//  WMWebViewController.m
//  WebviewDemo
//


#import "WMWebViewController.h"
#import "JSPluginSystem.h"

#define NavigationBarHeight (self.navigationController.navigationBar.frame.size.height + [[UIApplication sharedApplication] statusBarFrame].size.height)

@implementation WMWebViewController

-(instancetype) initWithUrl:(NSString *) url {
    if (self == [super init]) {
        
        self.url = url;
    }
    
    return self;
}
- (void)viewDidLoad {
    [super viewDidLoad];
    
    // 将默认顶部bar去掉，左边的返回按钮
    self.navigationController.navigationBar.hidden = YES;
    self.navigationController.view.backgroundColor = [UIColor clearColor];
    self.navigationItem.leftBarButtonItem = nil;
    self.navigationItem.hidesBackButton = YES;

    [self initWebview];
    
    
}
-(void) initWebview {
    
    // 创建一个webview
    self.webView = [[WKWebView alloc] initWithFrame:CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height)];
    
    self.navigationController.navigationBar.userInteractionEnabled = YES;
    if (@available(iOS 11.0, *)) {
        self.webView.scrollView.contentInsetAdjustmentBehavior = UIScrollViewContentInsetAdjustmentNever;
    } else {
        self.automaticallyAdjustsScrollViewInsets = NO;
    }

    // 开始loadurl
    NSURLRequest *request =[NSURLRequest requestWithURL:[NSURL URLWithString:self.url]];
    
    [self.view addSubview:self.webView];
    self.webView.navigationDelegate = self;
    // 浏览器敲回车
    [self.webView loadRequest:request];
}

#pragma mark - WKNavigationDelegate
- (void)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler {
    
    // 拦截所有的webview内部的请求
    NSURL *URL = navigationAction.request.URL;

    // 如果当前的这个请求url是jsbridge开头的
    if ([[URL scheme] isEqualToString:@"jsbridge"]) {
        JSPluginSystem *jsplugin = [[JSPluginSystem alloc] init];
        [jsplugin dealWithJSAPI:URL webview:webView];

    }
    decisionHandler(WKNavigationActionPolicyAllow);
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
@end
