#!/usr/bin/jjs -fv
$ENV.PWD = "payara";
var cmd = "docker build --no-cache -t airhacks/payara ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);
print($OUT);