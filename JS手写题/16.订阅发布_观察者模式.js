/**
 * 观察者模式即订阅发布模式
 * 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象，
 * 当主题对象发生变化时，它的所有观察者都会收到通知并更新
 */
class Publisher {
  constructor() {
    this.subscribers = []
  }
  subscriber(subscriber) {
    this.subscribers.push(subscriber)
  }
  unsubscribe(unsubscriber) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== unsubscriber)
  }
  notify() {
    this.subscribers.forEach(subscriber => subscriber.update())
  }
}

class Subscriber {
  constructor(name) {
    this.name = name
  }
  update() {
    console.log(`${this.name} update`)
  }
}

// 创建发布者和订阅者
const publisher = new Publisher()
const subscriber1 = new Subscriber('subscriber1')
const subscriber2 = new Subscriber('subscriber2')

// 订阅
publisher.subscriber(subscriber1)
publisher.subscriber(subscriber2)

// 发布者发布消息
publisher.notify('Hello, subscribers!');