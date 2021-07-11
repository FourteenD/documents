import{d as a}from"./app.d238b096.js";const s={},n=a('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>事务处理是一种机制，用来管理成批的 SQL 操作，以保证数据库的完整性。如果错误发生，则进行回退（撤销）到已知安全状态的版本。</p><p>术语：</p><ul><li>事务（transaction）：指一组 SQL 语句</li><li>回退（rollback）：指撤销指定 SQL 语句的过程</li><li>提交（commit）：指将未存储的 SQL 语句结果写入数据库表</li><li>保留点（savepoint）：指事务处理中设置的临时占位符（place-holder），你可以对它发布回退（与回退整个事务处理不同）</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>\n<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> orders\n<span class="token keyword">WHERE</span> order_num <span class="token operator">=</span> <span class="token number">20016</span><span class="token punctuation">;</span>\n<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> orderitems\n<span class="token keyword">WHERE</span> order_num <span class="token operator">=</span> <span class="token number">20016</span><span class="token punctuation">;</span>\n<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>\n</code></pre></div>',6);s.render=function(a,s){return n};export default s;