# Concurrency

## Goroutine
* [Part 25: Mutex](https://golangbot.com/mutex)/
* [golang的goroutine是如何实现的？](http://www.zhihu.com/question/20862617)
* [The Go scheduler](http://morsmachine.dk/go-scheduler)
* [当一个goroutine被网络IO阻塞住后，它对应的线程会被阻塞吗?](https://www.zhihu.com/question/27207566)
* [Golang blocking and non blocking](https://stackoverflow.com/questions/36112445/golang-blocking-and-non-blocking)
* [Go by Example: Stateful Goroutines](https://gobyexample.com/stateful-goroutines)
* [还有比GoLang Channel更好的方式代替Mutex吗？](https://www.zhihu.com/question/27256570)-[唐生的回答](https://www.zhihu.com/question/27256570/answer/35889022)包含了[sync.Cond](https://godoc.org/sync#Cond)的用法
* [Golang 互斥锁内部实现](https://zhuanlan.zhihu.com/p/27608263)
* [Is there some elegant way to pause & resume any other goroutine in golang?](https://stackoverflow.com/questions/16101409/is-there-some-elegant-way-to-pause-resume-any-other-goroutine-in-golang/16102304#16102304)
* [Closures in go routines have incorrect scope unless the variables are copied](https://stackoverflow.com/questions/24196200/closures-in-go-routines-have-incorrect-scope-unless-the-variables-are-copied)
* [Using goroutines on loop iterator variables](https://github.com/golang/go/wiki/CommonMistakes#using-goroutines-on-loop-iterator-variables)
* [goroutine hangs at runtime.Gosched() #12553](https://github.com/golang/go/issues/12553)
* [Performance without the event loop](https://dave.cheney.net/2015/08/08/performance-without-the-event-loop)
* [Go: pausing a goroutine](https://stackoverflow.com/questions/31730244/go-pausing-a-goroutine)
* [Understanding goroutines](https://stackoverflow.com/questions/10095751/understanding-goroutines)
* [golang methods that will yield goroutines](https://stackoverflow.com/questions/21102078/golang-methods-that-will-yield-goroutines)
* [Go: 关于锁的1234](https://segmentfault.com/a/1190000023373610)

## Limiting Concurrency
* [Limiting Concurrency in Go](http://jmoiron.net/blog/limiting-concurrency-in-go/)
* [Go: Always have x number of goroutines running at any time(see artyom's answer)](https://stackoverflow.com/questions/25306073/go-always-have-x-number-of-goroutines-running-at-any-time)

## Channel
* [throw: all goroutines are asleep - deadlock](https://stackoverflow.com/questions/12398359/throw-all-goroutines-are-asleep-deadlock)
* [Part 22: Channels](https://golangbot.com/channels/)
* [Golang channels tutorial](http://guzalexander.com/2013/12/06/golang-channels-tutorial.html)
* [Go by Example: Closing Channels](https://gobyexample.com/closing-channels)
* [Go by Example: Channel Directions](https://gobyexample.com/channel-directions)
* [What's the point of one-way channels in Go?](https://stackoverflow.com/questions/13596186/whats-the-point-of-one-way-channels-in-go)
* [Is it OK to leave a channel open?](https://stackoverflow.com/questions/8593645/is-it-ok-to-leave-a-channel-open)
* [How to Gracefully Close Channels](https://go101.org/article/channel-closing.html)
* [Check if a channel is closed without blocking the current goroutine](https://go101.org/article/channel-use-cases.html#check-closed-status)

## Catch Return Values of Goroutines
* [Catching return values from goroutines](https://stackoverflow.com/questions/20945069/catching-return-values-from-goroutines)

## Map
* [Golang map len() reports > 0 when map is empty](https://stackoverflow.com/questions/33872157/golang-map-len-reports-0-when-map-is-empty)
* [How safe are Golang maps for concurrent Read/Write operations?](https://stackoverflow.com/questions/36167200/how-safe-are-golang-maps-for-concurrent-read-write-operations)
