<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Calculator</title>

    <!-- Added link to the jQuery Library -->
    <script src="https://code.jquery.com/jquery-2.2.3.js" integrity="sha256-laXWtGydpwqJ8JA+X9x2miwmaiKhn8tVmOVEigRNtP4=" crossorigin="anonymous"></script>

    <!-- Added a link to Bootstrap-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

</head>
<body>

<!-- Jumbotron for Title -->
<div class="jumbotron">
    <h1 class="text-center">jQuery Calculator</h1>
    <h3 class="text-center">Perform basic mathematic operations using the power of jQuery!</h3>
</div>

<div class="container">

    <div class="row">

        <!-- Calculator Panel -->
        <div class="col-lg-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Calculator</h3>
                </div>

                <div class="panel-body">
                    <button id="button1" class="btn btn-primary number" value="1"><h1>1</h1></button>
                    <button id="button2" class="btn btn-primary number" value="2"><h1>2</h1></button>
                    <button id="button3" class="btn btn-primary number" value="3"><h1>3</h1></button>
                    <button id="buttonPlus" class="btn btn-danger operator" value="plus"><h1>+</h1></button>
                    <br><br>
                    <button id="button4" class="btn btn-primary number" value="4"><h1>4</h1></button>
                    <button id="button5" class="btn btn-primary number" value="5"><h1>5</h1></button>
                    <button id="button6" class="btn btn-primary number" value="6"><h1>6</h1></button>
                    <button id="buttonMinus" class="btn btn-danger operator" value="minus"><h1>&minus;</h1></button>
                    <br><br>
                    <button id="button7" class="btn btn-primary number" value="7"><h1>7</h1></button>
                    <button id="button8" class="btn btn-primary number" value="8"><h1>8</h1></button>
                    <button id="button9" class="btn btn-primary number" value="9"><h1>9</h1></button>
                    <button id="buttonMultiply" class="btn btn-danger operator" value="times"><h1>&times;</h1></button>
                    <br><br>
                    <button id="button0" class="btn btn-primary number" value="0"><h1>0</h1></button>
                    <button id="buttonDivide" class="btn btn-danger operator" value="divide"><h1>&divide;</h1></button>
                    <button id="buttonPower" class="btn btn-danger operator" value="power"><h1>^</h1></button>
                    <button id="buttonEqual" class="btn btn-success equal" value="equals"><h1>=</h1></button>
                    <br><br>
                    <button id="buttonClear" class="btn btn-default clear" value="clear"><h1>clear</h1></button>
                </div>

            </div>
        </div>

        <!-- Result Panel -->
        <div class="col-lg-6">
        <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Result</h3>
                </div>
                <div class="panel-body">
                    <h1 id="firstNumber"></h1>
                    <h1 id="operator"></h1>
                    <h1 id="secondNumber"></h1>
                    <hr>
                    <h1 id="result"></h1>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">

$(document).ready(function(){

// Your code here...

//

var calc = {n1: "",
            n2: "",
            operator: "",
            answr: "",
            "plus": function () {
              return Number(this.n1) + Number(this.n2);
            },
            "minus": function () {
              return Number(this.n1) - Number(this.n2);
            },
            "times": function () {
              return Number(this.n1) * Number(this.n2);
            },
            "divide": function () {
              return Number(this.n1) / Number(this.n2);
            },
            "power": function () {
              return Math.pow(Number(this.n1), Number(this.n2));
            },
            "clear": function () {
              this.n1 = "";
              this.n2 = "";
              this.operator = "";
            },
            operate: {
              "plus": "+",
              "minus": "-",
              "times": "x",
              "divide": "/",
              "power": "^",
              "":""
            },
            view: {
              n1: function () {
                $("#firstNumber").html(calc.n1);
              },
              n2: function () {
                $("#secondNumber").html(calc.n2);
              },
              operator: function () {
                $("#operator").html(calc.operate[calc.operator]);
              },
              answr: function () {
                $("#result").html(calc.answr);
              }
            }
          };

$(".operator").on("click", function () {
  var buttonVal = $(this).val();
  if (calc.operator === "") {
    if (calc.n1 === "") {
      calc.n1 = calc.answr;
      calc.answr = "";
      calc.view.answr();
      calc.view.n1();
    }
    calc.operator = buttonVal;
    calc.view.operator();
  }
});

$(".number").on("click", function () {
  var buttonVal = $(this).val();
  if (calc.operator === "") {
    calc.answr = "";
    calc.view.answr();
    calc.n1 = calc.n1 + buttonVal;
    calc.view.n1();
  }
  else {
    calc.n2 = calc.n2 + buttonVal;
    calc.view.n2();
  }
});

$("#buttonClear").on("click", function () {
  calc.clear();
  calc.answr = "";
  calc.view.n1();
  calc.view.n2();
  calc.view.operator();
  calc.view.answr();
});

$("#buttonEqual").on("click", function () {
  if (calc.n1 !== "" && calc.n2 !== "" && calc.operator !== "") {
    calc.answr = calc[calc.operator]();
    calc.clear();
    calc.view.n1();
    calc.view.n2();
    calc.view.operator();
    calc.view.answr();
  }
});










});

</script>

</body>
</html>
