<!DOCTYPE html>
<html class="h-100" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content=" {{ csrf_token()}} ">
    <title>PeeBu</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
</head>
<body class="h-100">
<div id="app" class="flex-center position-ref h-100">
    <root-component></root-component>
</div>
</body>
<script src="{{ asset('js/app.js') }}"></script>
</html>
