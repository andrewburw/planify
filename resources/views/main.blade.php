<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <link rel="stylesheet" href="/css/app.css">
        <title>Planify</title>

    </head>
    <body >
           <div id="app"></div>
           <script   src="{{asset('js/app.js')}}" ></script>
           <script   src="{{asset('js/ve.js')}}" ></script>
          
    </body>
</html>
