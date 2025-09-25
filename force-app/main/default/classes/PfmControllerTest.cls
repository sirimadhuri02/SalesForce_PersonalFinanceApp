@IsTest
private class PfmControllerTest {
  @IsTest static void testSnapshot() {
    Test.startTest();
    Map<String,Object> res = (Map<String,Object>)PfmController.getPFMSnapshot();
    Test.stopTest();
    System.assert(res.containsKey('balance'));
  }
}
