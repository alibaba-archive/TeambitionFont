// ┌──────────────────────────────────────────────────────────────────────────────────────────────────────────┐
// │               _                          _                       _     _ _   _                           │
// │              (_)                        | |                     | |   (_) | (_)                          │
// │               _ _ ____   _____   __  __ | |_ ___  __ _ _ __ ___ | |__  _| |_ _  ___  _ __                │
// │              | | '_ \ \ / / _ \  \ \/ / | __/ _ \/ _` | '_ ` _ \| '_ \| | __| |/ _ \| '_ \               │
// │              | | | | \ V / (_) |  >  <  | ||  __/ (_| | | | | | | |_) | | |_| | (_) | | | |              │
// │              |_|_| |_|\_/ \___/  /_/\_\  \__\___|\__,_|_| |_| |_|_.__/|_|\__|_|\___/|_| |_|              │
// │                                                                                                          │
// └──────────────────────────────────────────────────────────────────────────────────────────────────────────┘

function setTheFont (context,name,font,color){
	var sketch = context.api()
	var document = sketch.selectedDocument
	var doc = context.document
	var selection = context.selection
	if (selection.count() > 0 ) {
		for (var i=0; i < selection.count(); i++){
			var item = selection[i]
			if (item.class() == "MSTextLayer") {
				try {
					item.setFont(font)
					color == "#FFFFFF" ? item.setTextAlignment(NSTextAlignmentCenter) : item.setTextAlignment(NSTextAlignmentLeft)
					color ? item.setTextColor(MSColor.colorWithRed_green_blue_alpha( hexToRgb(color).r / 255 , hexToRgb(color).g / 255, hexToRgb(color).b / 255 ,1.0) ) : item.setTextColor(MSColor.colorWithRed_green_blue_alpha( 56/255 , 56/255 , 56/255 ,1.0))
					item.setLineHeight(Math.round(item.fontSize() * 1.428))
					// oldName = item.name()
					// item.setName(oldName + " - " + name)
					color == "#FFFFFF" ? [doc showMessage:name + " 设置成功，▦▦▦ 注意文字是白色的 ▦▦▦"] : [doc showMessage:name + " 设置成功"]
				} catch (e) {
					[doc showMessage:"设置出错：" + e]
				}
			}
		}

	}else{
		[doc showMessage:"请选择文本图层"]
	}
}
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

//-------web-------

function webtype1(context) {
	setTheFont( context , "Web-一级标题" ,[NSFont systemFontOfSize:18 weight:NSFontWeightBold])
}

function webtype2(context) {
	setTheFont( context , "Web-二级标题" ,[NSFont systemFontOfSize:18])
}

function webtype3(context) {
	setTheFont( context , "Web-三级标题" ,[NSFont systemFontOfSize:16])
}

function webtype4(context) {
	setTheFont( context , "Web-默认" ,[NSFont systemFontOfSize:14])
}

function webtype5(context) {
	setTheFont( context , "Web-默认加粗" ,[NSFont systemFontOfSize:14 weight:NSFontWeightBold])
}

function webtype6(context) {
	setTheFont( context , "Web-辅助" ,[NSFont systemFontOfSize:12] , "#808080")
}

function webtype7(context) {
	setTheFont( context , "Web-链接" ,[NSFont systemFontOfSize:14] , "#3DA8F5")
}

function webtype8(context) {
	setTheFont( context , "Web-失效" ,[NSFont systemFontOfSize:14]  , "#a6a6a6")
}

function webtype9(context) {
	setTheFont( context , "Web-占位" ,[NSFont systemFontOfSize:14] , "#cccccc")
}

function webtype10(context) {
	setTheFont( context , "Web-一级警示" ,[NSFont systemFontOfSize:12] , "#FF4F3E")
}

function webtype11(context) {
	setTheFont( context , "Web-二级警示" ,[NSFont systemFontOfSize:12] , "#FFAF38")
}

function webtype12(context) {
	setTheFont( context , "Web-角标" ,[NSFont systemFontOfSize:12] , "#FFFFFF")
}

function webtype13(context) {
	setTheFont( context , "Web-标签" ,[NSFont systemFontOfSize:14] , "#FFFFFF")
}


//-------iOS-------
function mactype1(context) {
	setTheFont( context , "iOS-一级标题" ,[NSFont systemFontOfSize:32])
}

function mactype2(context) {
	setTheFont( context , "iOS-二级标题" ,[NSFont systemFontOfSize:22])
}

function mactype3(context) {
	setTheFont( context , "iOS-二级标题（绿）" ,[NSFont systemFontOfSize:22] , "#75C940")
}

function mactype4(context) {
	setTheFont( context , "iOS-二级标题（橙）" ,[NSFont systemFontOfSize:22] , "#FFAF38")
}

function mactype5(context) {
	setTheFont( context , "iOS-三级标题" ,[NSFont systemFontOfSize:18])
}

function mactype6(context) {
	setTheFont( context , "iOS-四级标题" ,[NSFont systemFontOfSize:16 weight:NSFontWeightMedium])
}

function mactype7(context) {
	setTheFont( context , "iOS-默认" ,[NSFont systemFontOfSize:15])
}

function mactype8(context) {
	setTheFont( context , "iOS-默认（蓝）" ,[NSFont systemFontOfSize:15] , "#3DA8F5")
}

function mactype9(context) {
	setTheFont( context , "iOS-二类默认" ,[NSFont systemFontOfSize:14])
}

function mactype10(context) {
	setTheFont( context , "iOS-二类默认（橙）" ,[NSFont systemFontOfSize:14], "#FFAF38")
}

function mactype11(context) {
	setTheFont( context , "iOS-辅助" ,[NSFont systemFontOfSize:12])
}

function mactype12(context) {
	setTheFont( context , "iOS-辅助（蓝）" ,[NSFont systemFontOfSize:12] , "#3DA8F5")
}

function mactype13(context) {
	setTheFont( context , "iOS-备注" ,[NSFont systemFontOfSize:10])
}

function mactype14(context) {
	setTheFont( context , "备注（蓝）" ,[NSFont systemFontOfSize:10] , "#3DA8F5")
}
//--------Android--------
// B50 #3DA8F5
// R50 #FF4F3E
// A50 #FFAF38
// GN50 #75C940
//
// G100 #383838   G90 #808080  G80 #A6A6A6  G70 #CCCCCC  G50 E5E5E5  G30 #F5F5F5
function androidtype1(context) {
	setTheFont( context , "Android-一级标题" ,[NSFont fontWithName:@"Roboto" size:32])
}

function androidtype2(context) {
	setTheFont( context , "Android-一级标题（蓝）" ,[NSFont fontWithName:@"Roboto" size:32], "#3DA8F5")
}

function androidtype3(context) {
	setTheFont( context , "Android-二级标题" ,[NSFont fontWithName:@"Roboto" size:24])
}

function androidtype4(context) {
	setTheFont( context , "Android-三级标题" ,[NSFont fontWithName:@"Roboto" size:20 weight:NSFontWeightMedium])
}

function androidtype5(context) {
	setTheFont( context , "Android-三级标题（绿）" ,[NSFont fontWithName:@"Roboto" size:20 weight:NSFontWeightMedium], "#75C940")
}

function androidtype6(context) {
	setTheFont( context , "Android-三级标题（橙色）" ,[NSFont fontWithName:@"Roboto" size:20 weight:NSFontWeightMedium], "#FFAF38")
}

function androidtype7(context) {
	setTheFont( context , "Android-四级标题" ,[NSFont fontWithName:@"Roboto" size:16])
}

function androidtype8(context) {
	setTheFont( context , "Android-四级标题（灰）" ,[NSFont fontWithName:@"Roboto" size:16], "#A6A6A6")
}

function androidtype9(context) {
	setTheFont( context , "Android-四级标题（蓝）" ,[NSFont fontWithName:@"Roboto" size:16], "#3DA8F5")
}

function androidtype10(context) {
	setTheFont( context , "Android-内容（灰）" ,[NSFont fontWithName:@"Roboto" size:16], "#A6A6A6")
}

function androidtype11(context) {
	setTheFont( context , "Android-四级标题（红）" ,[NSFont fontWithName:@"Roboto" size:16], "#FF4F3E")
}

function androidtype12(context) {
	setTheFont( context , "Android-内容（占位）" ,[NSFont fontWithName:@"Roboto" size:16], "#CCCCCC")
}

function androidtype13(context) {
	setTheFont( context , "Android-内容（Toast）" ,[NSFont fontWithName:@"Roboto" size:16], "#F5F5F5")
}

function androidtype14(context) {
	setTheFont( context , "Android-五级标题（正文）" ,[NSFont fontWithName:@"Roboto" size:14 weight:NSFontWeightMedium], "#383838")
}

function androidtype15(context) {
	setTheFont( context , "Android-正文" ,[NSFont fontWithName:@"Roboto" size:14], "#383838")
}

function androidtype16(context) {
	setTheFont( context , "Android-副标题" ,[NSFont fontWithName:@"Roboto" size:14], "#808080")
}

function androidtype17(context) {
	setTheFont( context , "Android-正文（角标）" ,[NSFont fontWithName:@"Roboto" size:14], "#F5F5F5")
}

function androidtype18(context) {
	setTheFont( context , "Android-正文（蓝）" ,[NSFont fontWithName:@"Roboto" size:14], "#3DA8F5")
}

function androidtype19(context) {
	setTheFont( context , "Android-正文（红）" ,[NSFont fontWithName:@"Roboto" size:14], "#FF4F3E")
}

function androidtype20(context) {
	setTheFont( context , "Android-正文（橙）" ,[NSFont fontWithName:@"Roboto" size:14], "#FFAF38")
}

function androidtype21(context) {
	setTheFont( context , "Android-辅助（注释）" ,[NSFont fontWithName:@"Roboto" size:12], "#A6A6A6")
}

function androidtype22(context) {
	setTheFont( context , "Android-辅助（期日）" ,[NSFont fontWithName:@"Roboto" size:12], "#CCCCCC")
}

function androidtype23(context) {
	setTheFont( context , "Android-辅助（蓝）" ,[NSFont fontWithName:@"Roboto" size:12], "#3DA8F5")
}
