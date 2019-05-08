//
//  Util.h
//  WebviewDemo
//
//  Created by tennylv(吕鸣) on 2018/4/25.
//  Copyright © 2018年 lvming. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface Util : NSObject
+ (NSDictionary *)dictionaryWithJsonString:(NSString *)jsonString;
+(UIViewController *)getCurrentVC;
@end
