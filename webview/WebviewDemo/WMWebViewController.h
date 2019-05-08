//
//  WMWebViewController.h
//  WebviewDemo
//
//  Created by tennylv(吕鸣) on 2018/4/25.
//  Copyright © 2018年 lvming. All rights reserved.
//
#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>

@interface WMWebViewController : UIViewController<NSURLConnectionDataDelegate,WKNavigationDelegate>
@property(nonatomic,strong) WKWebView *webView;
@property(nonatomic, strong) NSString *url;


-(instancetype) initWithUrl:(NSString *) url;
@end
