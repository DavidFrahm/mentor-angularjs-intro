AngularJS Goodies
=================

Angular Seed projects are good reference
* Basics for learning: https://github.com/angular/angular-seed
* Real-world: https://github.com/ngbp/ng-boilerplate
* Overkill?: https://github.com/robertjchristian/angular-enterprise-seed

Excellent video tutorials: http://egghead.io

Directory of AngularJS modules: http://ngmodules.org

Sites built with AngularJS: http://builtwith.angularjs.org

Batarang Chrome extension helps you debug a running AngularJS app

Avoid cross-origin errors with ajax when running localhost
Chrome command line option: --disable-web-security

Demo of AngularJS Awesomeness
=============================

View 1
------

Initialize and display a (model) value

* View-only, no controller

View 2
------

Hide and show an element

* Using view only
* Using controller variables, methods

View 3
------

API call and display list of items

* Controller AJAX via $http
* View display using ng-repeat

Overview
========
http://docs.angularjs.org/guide/concepts

AngularJS is:
* MVC
* SPA (Single Page Application, vs. Round Trip)
* framework (not a library)
* extends HTML (via directives)
* two-way data binding
* dependency injection

* First-class development! (which happens to be in browser)

AngularJS takes care of:
* DOM Manipulation
* Setting Up Listeners and Notifiers
* Input Validation

AngularJS parts:
* modules
* routes
* controllers
* services
* filters
* directives

Concepts
--------

Don't write DOM manipulation code

jQuery not required; Try to get by without it
* jqLite included for selectors

AngularJS help for jQuery mindset:
* http://blog.artlogic.com/2013/03/06/angularjs-for-jquery-developers/
* http://stackoverflow.com/questions/14994391/how-do-i-think-in-angularjs-if-i-have-a-jquery-background

Structure
=========

index.html: base markup
    app.js: root initializer for the angular app
        configure modules
        configure routing
        run()
    controller.js: 

Modules
=======

Lots of different syntax:
* Normal vs. Minified
* string-along vs. separated in same file vs. separate files

Routes
======

View > Template

View > Template > Controller

Redirect

Controllers
===========

Assigned via ng-controller

Assigned via route

Services
========
http://angular-tips.com/blog/2013/08/understanding-service-types/

All services are singletons
(by default; you can change this, but very rare to need this)

Included: $http, $resource, $location, $window

Types
-----

constant
value
factory
service
provider

Extend factory service using decorator pattern

Filters
=======

* To be added for next mentoring session

Directives
==========

* To be added for next mentoring session

Testing
=======

Unit Testing
------------

via 'specs' using Jasmine

System Testing
--------------

a.k.a., 'e2e' or 'end to end'

via 'scenarios' using Jasmine

Karma Test Runner
-----------------

Local browser apps
PhantomJS library, headless, good for CI server
