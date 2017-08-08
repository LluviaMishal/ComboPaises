<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Combo.aspx.cs" Inherits="Combo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="mySuperApp">
<head>   
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" /> 
    <link href="//code.ionicframework.com/nightly/css/ionic.css" rel="stylesheet"/>
    <script type="text/javascript" src="//code.ionicframework.com/nightly/js/ionic.bundle.js"></script>
    <script type="text/javascript" src="Scripts/funciones.js"></script>
    <title>ComboBox</title>
</head>

<body class="padding" ng-controller="PopupCtrl">
    <select name="selectPais" id="selectPais" ng-model="data.defaultPais" ng-options="pais.paisCodigo as pais.paisNombre for pais in paises track by pais.paisCodigo" ng-change="updateDropDownDepartamentos(data.defaultPais)">
	    <option value="">Seleccione país</option>
	</select>
    <select name="selectDepartamento" id="selectDepartamento" ng-disabled="!data.defaultPais" ng-model="data.defaultDepartamento" ng-options="departamento.deptoId as departamento.deptoNombre for departamento in departamentos_filter" ng-change="updateDropDownProvincias(data.defaultDepartamento)">
	    <option value="">Seleccione departamento</option>
	</select>
    <select name="selectProvincias" id="selectProvincias" ng-model="data.defaultProvincias" ng-options="provincia.proNombre for provincia in provincias_filter" ng-disabled="!data.defaultDepartamento">
	    <option value="">Seleccione provincia</option>
	</select>
</body>
</html>
