public with sharing class PfmController {
  @AuraEnabled(cacheable=true)
  public static Map<String,Object> getPFMSnapshot() {
    // dummy values for starter
    Map<String,Object> res = new Map<String,Object>();
    res.put('balance', '₹ 24,500');
    res.put('goalProgress', 42);
    return res;
  }
}
