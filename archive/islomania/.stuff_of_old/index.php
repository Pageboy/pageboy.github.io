<?php
/*
=====================================================
 ExpressionEngine - by pMachine
-----------------------------------------------------
 http://www.pmachine.com/
-----------------------------------------------------
 Copyright (c) 2003,2004,2005 pMachine, Inc.
=====================================================
 THIS IS COPYRIGHTED SOFTWARE
 PLEASE READ THE LICENSE AGREEMENT
 http://www.pmachine.com/expressionengine/license.html
=====================================================
 File: index.php
-----------------------------------------------------
 Purpose: Triggers the main engine
=====================================================
*/

// URI Type
// This variable allows you to hard-code the URI type.
// For most servers, 0 works fine.
// 0 = auto  
// 1 = path_info  
// 2 = query_string

$qtype = 0; 


// DO NOT EDIT BELOW THIS!!! 

error_reporting(0);

if (isset($_GET['URL'])) 
{ 
	if (substr($_GET['URL'], 0, 4) != "http") $_GET['URL'] = "http://".$_GET['URL']; 
	header("location: ".$_GET['URL']); 
	exit; 
}

$uri  = '';
$pathinfo = pathinfo(__FILE__);
$ext  = ( ! isset($pathinfo['extension'])) ? '.php' : '.'.$pathinfo['extension'];
$self = ( ! isset($pathinfo['basename'])) ? 'index'.$ext : $pathinfo['basename'];

$path_info = (isset($_SERVER['PATH_INFO'])) ? $_SERVER['PATH_INFO'] : @getenv('PATH_INFO');
$query_str = (isset($_SERVER['QUERY_STRING'])) ? $_SERVER['QUERY_STRING'] : @getenv('QUERY_STRING');

switch ($qtype)
{
	case 0 :	$uri = ($path_info != '' AND $path_info != "/".$self) ? $path_info : $query_str;
		break;
	case 1 :	$uri = &$path_info; 	
		break;
	case 2 :	$uri = &$query_str; 
		break;
}

unset($system_path);
unset($config_file);
unset($path_info);
unset($query_str);
unset($qstr);

require 'path'.$ext;

if ((isset($template_group) AND isset($template)) && $uri != '' && $uri != '/')
{
	if (preg_match("#^\/P\d+\/$#", $uri))
	{
		$qstr = $uri;
	}
	else
	{
		$template_group = '';
		$template = '';
	}
}

if ( ! isset($system_path))
{
	if (file_exists('install'.$ext))
	{
		header("location: install".$ext); 
		exit;
	}
	else
	{
        exit("The system does not appear to be installed. Click <a href='install.php'>here</a> to install it.");	
	}
}

if ( ! ereg("/$", $system_path)) $system_path .= '/';

require $system_path.'core/core.system'.$ext;

?>