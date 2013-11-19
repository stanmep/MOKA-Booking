# Assignment #

* Due: 26/11/2013, 24:00

This assignment is to setup your initial development environment. Please review the previous project we did before starting this setup. If you are still not sure, ask others to help.


# Update Visual Studio 2012 Update 4 #

* [Download](http://www.microsoft.com/en-us/download/details.aspx?id=39305)

*NOTE*: This download is 2.33GB of size. It takes for ages to get your VS 2012 updated so this update **MUST** be completed before the due date.


# Setup GitHub Repository #

* Fork the GitHub repository, [https://github.com/aliencube/MOKA-Booking](https://github.com/aliencube/MOKA-Booking), to your account.
* Clone **YOUR** GitHub repository to your local hard drive.
* Update your local repository settings.
   * Setup your email address.
   * Add `aliencube` repository to your remote repository.
* Switch to the `dev` branch.


# Setup Solution #

* Open the solution `MokaBooking.sln` under your name. eg) `SourceCodes/Justin.Yoo/MokaBooking.sln`.
* Add two projects
   * `MokaBooking.Web.UI`
      * .NET Framework 4.5
      * ASP.NET MVC 4 Web Application
      * Empty Template
      * Razor View Engine
   * `MokaBooking.Web.UI.Tests`
      * NUnit Test Framework
* Add NuGet packages and assign them to appropriate projects
   * For `MokaBooking.Web.UI.Tests`
      * For `MokaBooking.Web.UI`
      * `jQuery 2.0.3`
      * `Bootstrap for MVC 5 2.1.3`
      * `AngularJS 1.2.0`
      * `Json.NET 5.0.8`
   * For `MokaBooking.Web.UI.Tests`
      * `Nunit 2.6.3`
      * `NUnit.Runners 2.6.3`
      * `NUnit Test Adapter for VS 2012 and 2013 1.0`
      * `NSubstitute 1.6.1`
      * `Json.NET 5.0.8`
* Update all NuGet packages up-to-date.