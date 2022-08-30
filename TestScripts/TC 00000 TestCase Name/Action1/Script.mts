'##############################################################################################################################################
'Testcase Name            				- TestCase Name
'Developer     							- Auther
'Date									- 
'##############################################################################################################################################
'Load Global Environment Variables
Environment.LoadFromFile PathFinder.Locate("..\..\..\Environment\Configurations.xml")

'Load Common Function Library
Call LoadFunctionLibrary (PathFinder.Locate(Environment("CommonFunctionLibrary")))

'Test Case Initiation initiation
Call RunTest()

Call LoadResources("WIN\Security")
Call LoadResources("WIN\DummyDriver")

'Login to Application
Call LoginWinWeb(TestData("strBrowserType"),TestData("strApplicationURL"),TestData("strUserName"),TestData("strPassword"))

Call NodeNavigation("User Search")

Call UserSearch()
'Logout
Call WinWebLogout()
'Framework Termination
Call OnTerminate()

















