<p>Referencja jesto to wskazanie na inną zmienną </p>
<?php
     $foo = 'Bob';
     $bar = &$foo; //referencja na $foo
     $bar = 'Andy';
     echo $bar;
     echo $foo;
define("CONSTANT", "Hello World.");
echo CONSTANT; // outputs "hello world"


