# Redis

## Doc
* [Redis 命令参考](http://redisdoc.com/)

## Books
* [Redis 设计与实现（第一版）](http://origin.redisbook.com/)
* Redis in Action
    * ["Redis in Action" ebook hosted on redislabs.com](https://redislabs.com/ebook/redis-in-action)
    * [cache-ria-ebook](https://github.com/northbright/cache-ria-ebook)
    * [《Redis实战》中文翻译支持网站](http://redisinaction.com/)
* [The Little Redis Book](http://openmymind.net/redis.pdf)
* [各位能否推荐几本redis方面比较好的书籍？](https://www.zhihu.com/question/26885503)

## Install
* [How to Install Redis Server on CentOS 7](https://linoxide.com/storage/install-redis-server-centos-7/)
* [CentOs 7: Systemd & PID File #3716](https://github.com/antirez/redis/issues/3716)

## Partitioning
* [Partitioning: how to split data among multiple Redis instances.](http://redis.io/topics/partitioning)

## Redis Cluster
* [离职系列文章之redis cluster使用经验](http://yangzhe1991.org/blog/2015/04/redis-cluster/)
* [全面剖析Redis Cluster原理和应用](http://blog.csdn.net/dc_726/article/details/48552531)
* [Redis Cluster架构优化](http://blog.csdn.net/dc_726/article/details/48733265)
* [Redis集群方案应该怎么做？](http://www.zhihu.com/question/21419897)
* [Redis Cluster](http://my.oschina.net/guol/blog/506193)
* [Redis Cluster 迁移遇到的各种坑及解决方案](http://mp.weixin.qq.com/s?__biz=MzA4Nzg5Nzc5OA==&mid=208060133&idx=1&sn=482812afe37a9c3c1ba8e2a2b768325d&scene=5&srcid=1202ldoRbmPKLJLJERxoe98o#rd)

## Twemproxy
* [基于Twemproxy的Redis集群方案](http://www.cnblogs.com/haoxinyue/p/redis.html)
* [Redis 代理服务Twemproxy](http://blog.csdn.net/hguisu/article/details/9174459/)
* [高性能的Redis代理TwemProxy](http://blog.csdn.net/dc_726/article/details/43991815)
* [Twemproxy, a Redis proxy from Twitter](http://antirez.com/news/44)
* [twemproxy的参数解析和监控](http://blog.itpub.net/20625855/viewspace-1692022/)
* [about redis_auth #384](https://github.com/twitter/twemproxy/issues/384)

## Sentinel
* [Sentinel-Redis高可用方案（二）：主从切换](http://www.cnblogs.com/Xrinehart/p/3502198.html)
* [Redis Sentinel机制与用法（一）](https://segmentfault.com/a/1190000002680804)
* [Redis Sentinel机制与用法（二）](https://segmentfault.com/a/1190000002685515)

## Codis
* [Codis作者黄东旭细说分布式Redis架构设计和踩过的那些坑们](http://mp.weixin.qq.com/s?__biz=MzAwMDU1MTE1OQ==&mid=208733458&idx=1&sn=691bfde670fb2dd649685723f7358fea)
* [codis，codis3.0和其他](http://yangzhe1991.org/blog/2015/12/codis3-0/)
* [Codis集群搭建摘要](http://blog.jobbole.com/99246/)
* [高效运维最佳实践（03）：Redis集群技术及Codis实践](http://www.infoq.com/cn/articles/effective-ops-part-03)

## Articles
* [Storing hundreds of millions of simple key-value pairs in Redis](http://instagram-engineering.tumblr.com/post/12202313862/storing-hundreds-of-millions-of-simple-key-value)
* [浅谈REDIS数据库的键值设计](http://www.hoterran.info/redis_kv_design)
* [Redis 集群的合纵与连横](http://www.cnblogs.com/mindwind/p/5100144.html?utm_source=itdadao&utm_medium=referral)
* [LINE Storage: Storing billions of rows in Sharded-Redis and HBase per Month](http://developers.linecorp.com/blog/?p=1420)
* [为什么使用 Redis及其产品定位](http://www.infoq.com/cn/articles/tq-why-choose-redis)
* [Redis内存使用优化与存储](http://www.infoq.com/cn/articles/tq-redis-memory-usage-optimization-storage)
* [Redis复制与可扩展集群搭建](http://www.infoq.com/cn/articles/tq-redis-copy-build-scalable-cluster)
* [Redis strings vs Redis hashes to represent JSON: efficiency?](http://stackoverflow.com/questions/16375188/redis-strings-vs-redis-hashes-to-represent-json-efficiency)
* [What is the difference between used_memory and used_memory_rss in Redis?](https://hashnode.com/post/what-is-the-difference-between-used_memory-and-used_memory_rss-in-redis-ciibz8fks01d5j3xty0sgi9dk)
* [Redis-运用场景与介绍](https://yeyute.github.io/2016/04/27/Redis-%E8%BF%90%E7%94%A8%E5%9C%BA%E6%99%AF%E4%B8%8E%E4%BB%8B%E7%BB%8D/)
* [10个常见的Redis面试"刁难"问题](https://mp.weixin.qq.com/s?__biz=MzAwMDU1MTE1OQ==&mid=2653549993&idx=1&sn=27240c1aa611c352a487ecee8ded050b&chksm=813a6431b64ded27fd43bd07d5245b672a6e03e7b7d4482ccef58510d97dfadc39d82d257416&scene=38#wechat_redirect)

## Lua Script
* [Redis lua when to really use it?](http://stackoverflow.com/questions/30869919/redis-lua-when-to-really-use-it)
* [使用Redis的脚本功能实现Redis中数据简单查询](http://blog.csdn.net/kungstriving4/article/details/20219069)

## Indexes & Search
* [Secondary indexing with Redis](http://redis.io/topics/indexes)
* [Two ways of using Redis to build a NoSQL autocomplete search index](http://patshaughnessy.net/2011/11/29/two-ways-of-using-redis-to-build-a-nosql-autocomplete-search-index)
* [Redis search for matching keys that equal a value](http://stackoverflow.com/questions/21474679/redis-search-for-matching-keys-that-equal-a-value)
* [Searching in values of a redis db](https://stackoverflow.com/questions/17193176/searching-in-values-of-a-redis-db)

## Use Cases
* [11 Common Web Use Cases Solved In Redis](http://highscalability.com/blog/2011/7/6/11-common-web-use-cases-solved-in-redis.html)
* [赠送几本即将出版的《Redis 实战》(帖子有很多实际使用redis的实例)](https://www.v2ex.com/t/227659?p=2)
* [Using Redis at Pinterest for Billions of Relationships](https://blog.pivotal.io/pivotal/case-studies/using-redis-at-pinterest-for-billions-of-relationships)
* [Building a follower model from scratch](https://engineering.pinterest.com/blog/building-follower-model-scratch)

## Replication
* [Replication](http://redis.io/topics/replication)
* [Diskless replication: a few design notes.](http://antirez.com/news/81)

## Errors / Problems
* [Redis: “Can’t save in background: fork: Cannot allocate memory”](https://pydelion.com/2013/05/27/redis-cant-save-in-background-fork-cannot-allocate-memory/)
* [RedisError: MISCONF Redis is configured to save RDB snapshots, but is currently not able to persist on disk. Commands that may modify the data set are disabled. Please check Redis logs for details about the error. #584](https://github.com/antirez/redis/issues/584)
* [redis持久化和常见故障](http://www.open-open.com/lib/view/open1450018149467.html)
* [redis线上问题及解决方法](http://www.cnblogs.com/wlibo666/p/5235634.html)

## Performance
* [StackExchange.Redis server.Keys(pattern:“IsVerySlow*”)](http://stackoverflow.com/questions/26438736/stackexchange-redis-server-keyspatternisveryslow)
* [Redis 常见的性能问题和解决方法](http://blog.nosqlfan.com/html/4077.html)
* [Redis 的性能幻想与残酷现实](http://mp.weixin.qq.com/s?__biz=MzAxMTEyOTQ5OQ==&mid=401738746&idx=1&sn=281af530d5abec981f3607d6e729914a&scene=21#wechat_redirect)
* [SCAN vs KEYS performance in Redis](http://stackoverflow.com/questions/32603964/scan-vs-keys-performance-in-redis)
* [Redis Running Slowly? Here’s What You Can Do About it ](https://dzone.com/articles/redis-running-slowly-heres)
* [Redis为什么变慢了？Redis性能问题排查详述](https://mp.weixin.qq.com/s/gYQn9tdFK9tHJDoMWcU4cQ)

## Security
* [我是如何利用Redis黑进你的系统的](https://zhuanlan.zhihu.com/p/25790352)

## SORT
* [Sorting](https://redislabs.com/ebook/redis-in-action/part-2-core-concepts-2/chapter-3-commands-in-redis/3-7-other-commands/3-7-1-sorting)

## Sorted Set
* [Redis sorted set stores score as a floating point number](https://www.leaseweb.com/labs/2014/07/redis-sorted-set-stores-score-floating-point-number/)
* [Strange float score precision with sorted sets #1499](https://github.com/antirez/redis/issues/1499)
* [Redis: How to intersect a “normal” set with a sorted set?](http://stackoverflow.com/questions/10500695/redis-how-to-intersect-a-normal-set-with-a-sorted-set)

## Transaction and Optimistic Lock
* [为何Redis用乐观锁，而MySQL数据库却没有？](https://www.zhihu.com/question/29397176)

## Querying
* [Storing and Querying Objects in Redis](http://tylerstroud.com/2014/11/18/storing-and-querying-objects-in-redis/)

## Stream
* [挑战Kafka！Redis5.0重量级特性Stream尝鲜](https://mp.weixin.qq.com/s?__biz=MzAwMDU1MTE1OQ==&mid=2653549949&idx=1&sn=7f6c4cf8642478574718ed0f8cf61409&chksm=813a64e5b64dedf357cef4e2894e33a75e3ae51575a4e3211c1da23008ef79173962e9a83c73&scene=38#wechat_redirect)

## Persistence(持久化)
* [深入浅出 Redis 持久化机制](https://mp.weixin.qq.com/s/oe1LxgGvkQYBtoU11tYe_A)

## Memory（内存）
* [【面试官】有遇到Redis内存过高的线上问题吗？为什么Redis删除数据后也无效？](https://zhuanlan.zhihu.com/p/363080080)
* [运维排查篇 | Redis占用内存过高怎么办？](https://zhuanlan.zhihu.com/p/566570612)
