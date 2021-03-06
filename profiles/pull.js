var Bench = Bench || {}
Bench.charts = [
{"name":"dotty (source changes over time)","url":"https://github.com/lampepfl/dotty","lines":[{"key":"dotty","label":"bootstrapped"}]},
{"name":"scala stdlib-2.13","url":"https://github.com/dotty-staging/scala/commits/stdLib213-dotty-community-build","lines":[{"key":"stdlib213","label":"bootstrapped"}]},
{"name":"scalap","url":"https://github.com/dotty-staging/scala/commits/scalap-dotty-community-build-2.13","lines":[{"key":"scalap","label":"bootstrapped"}]},
{"name":"re2","url":"https://github.com/liufengyun/bench/blob/master/tests/re2s","lines":[{"key":"re2s","label":"bootstrapped"}]},
{"name":"implicit cache I","url":"https://github.com/liufengyun/bench/blob/master/tests/implicit_cache.scala","lines":[{"key":"implicit-cache","label":"bootstrapped"}]},
{"name":"implicit cache II","url":"https://github.com/liufengyun/bench/blob/master/tests/implicitNums.scala","lines":[{"key":"implicitNums","label":"bootstrapped"}]},
{"name":"implicit scope loop","url":"https://github.com/liufengyun/bench/blob/master/tests/implicit-scope-loop.scala","lines":[{"key":"implicit-scope-loop","label":"bootstrapped"}]},
{"name":"inductive implicits","url":"https://github.com/liufengyun/bench/blob/master/tests/inductive-implicits.scala","lines":[{"key":"inductive-implicits","label":"bootstrapped"}]},
{"name":"exhaustivity check","url":"https://github.com/liufengyun/bench/blob/master/tests/patmatexhaust.scala","lines":[{"key":"patmatexhaust","label":"bootstrapped"}]},
{"name":"exhaustivity I","url":"https://github.com/liufengyun/bench/blob/master/tests/exhaustivity-I.scala","lines":[{"key":"exhaustivity-I","label":"bootstrapped"}]},
{"name":"exhaustivity S","url":"https://github.com/liufengyun/bench/blob/master/tests/exhaustivity-S.scala","lines":[{"key":"exhaustivity-S","label":"bootstrapped"}]},
{"name":"exhaustivity T","url":"https://github.com/liufengyun/bench/blob/master/tests/exhaustivity-T.scala","lines":[{"key":"exhaustivity-T","label":"bootstrapped"}]},
{"name":"exhaustivity V","url":"https://github.com/liufengyun/bench/blob/master/tests/exhaustivity-V.scala","lines":[{"key":"exhaustivity-V","label":"bootstrapped"}]},
{"name":"issue #1535","url":"https://github.com/liufengyun/bench/blob/master/tests/i535.scala","lines":[{"key":"i1535","label":"bootstrapped"}]},
{"name":"issue #1687","url":"https://github.com/liufengyun/bench/blob/master/tests/i1687.scala","lines":[{"key":"i1687","label":"bootstrapped"}]},
{"name":"empty class","url":"https://github.com/liufengyun/bench/blob/master/tests/empty-class.scala","lines":[{"key":"empty-class","label":"bootstrapped"}]},
{"name":"empty object","url":"https://github.com/liufengyun/bench/blob/master/tests/empty-object.scala","lines":[{"key":"empty-object","label":"bootstrapped"}]},
{"name":"empty file","url":"https://github.com/liufengyun/bench/blob/master/tests/empty-file.scala","lines":[{"key":"empty-file","label":"bootstrapped"}]},
{"name":"Inline a quote","url":"https://github.com/liufengyun/bench/blob/master/tests/power-macro/PowerInlined-1.scala","lines":[{"key":"power-macro-power-inlined-1","label":"bootstrapped"}]},
{"name":"Inline 1k quotes","url":"https://github.com/liufengyun/bench/blob/master/tests/power-macro/PowerInlined-1k.scala","lines":[{"key":"power-macro-power-inlined-1k","label":"bootstrapped"}]}
]
Bench.config = {"pr_base_url":"https://github.com/lampepfl/dotty/pull/"}
