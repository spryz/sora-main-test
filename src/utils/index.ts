/**
 * 屏幕工具类
 * ui设计基准
 * width:360
 * height:800
 */
import {Dimensions, PixelRatio} from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

let fontScale = PixelRatio.getFontScale();//返回字体大小缩放比例
let pixelRatio = PixelRatio.get();//返回设备的像素密度
// 设计图的宽高
const designWidth = 360;
const designHeight = 800;

// 根据dp获取屏幕的px
export let screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenWidth);
export let screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenHeight);

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function setText(size: any) {
    let scaleWidth = screenWidth / designWidth;
    let scaleHeight = screenHeight / designHeight;
    let scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round(size * scaleWidth / fontScale + 0.5);
    return size;
}

/**
 * 设置高度 扣除顶部和底部导航栏
 */
export function setContentHeight() {
    const size = 84 + 98;
    const scaleHeight = (size / designHeight) * screenPxH;
    const h = screenPxH - scaleHeight;
    return h / pixelRatio;
}

/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
export function setHeight(size: any) {
    let scaleHeight = (size / designHeight) * screenPxH;
    size = scaleHeight / pixelRatio;
    return size;
}

export function setTop(size:any){
    // 按比例
    const ss = designHeight / screenPxH
    let scaleHeight = (size / designHeight) * screenPxH;
    size = scaleHeight / pixelRatio;
    return size*ss;
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
export function setWidth(size: any) {
    let scaleWidth = (size / designWidth) * screenPxW;
    size = scaleWidth / pixelRatio;
    return size;
}

export function px2DpW(size: any) {
    return (size / designWidth) * screenPxW;
}

export function px2DpH(size: any) {
    return (size / designHeight) * screenHeight
}
