import { LightningElement, track, wire } from 'lwc';
import getPFMSnapshot from '@salesforce/apex/PfmController.getPFMSnapshot';

export default class PfmDashboard extends LightningElement {
  @track balance = 'Loading...';
  @track goalProgress = 0;

  connectedCallback() {
    getPFMSnapshot()
      .then(result => {
        this.balance = result.balance;
        this.goalProgress = result.goalProgress;
      })
      .catch(error => {
        this.balance = 'Error';
        console.error(error);
      });
  }

  openChat() {
    // navigation to chatbot utility or open modal
    const evt = new CustomEvent('openchat');
    this.dispatchEvent(evt);
  }
}
