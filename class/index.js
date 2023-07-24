const fnName = 'fn' + Math.floor(Math.random() * 1000)
class Color {
  constructor(r=0,g=0,b=0){
    this.r = r
    this.g = g
    this.b = b
  }
  // 访问
  get rgb() {
    return `rgb(${this.r},${this.g},${this.b})`
  }
  // 设置
  set rgb(val) {
    
  }
  // 一个《原型方法》
  toString() {
    return `重写的原型方法：${this.rgb}`
  }
  // 一个静态方法
  static fromCss(r,g,b) {
    // 利用 new this 可以直接得到 Color 实例
    return new this(r, g, b)
  }
  // 动态方法名
  [fnName]() {
    return `动态方法名${fnName}`
  }
}

class SubColor extends Color {
  constructor(r=0,g=0,b=0,a=1){
    super(r,g,b)
    this.a = a
  }
  static fromCss(r,g,b,a = a){
    const result = super.fromCss(r,g,b)
    return new this(r,g,b,a)
  }
}



const c = new Color(30, 144, 255)
console.log(c[fnName]()); // 动态方法名为：fn275
console.log(c.toString()); // 重写的原型方法：rgb(30, 144, 255)
console.log(c.rgb); // rgb(30, 144, 255)
console.log(Color.fromCss(255, 255, 255)); // Color {r: 255, g: 255, b: 255}