//
//  JSPluginSystem.h
//  WebviewDemo
//
//  Created by tennylv(吕鸣) on 2018/4/25.
//  Copyright © 2018年 lvming. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>

@interface JSPluginSystem : NSObject
-(void) dealWithJSAPI:(NSURL *)url webview:(WKWebView *)webview;
@property(nonatomic,strong) WKWebView *webView;
@end
