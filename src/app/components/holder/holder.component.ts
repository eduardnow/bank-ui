import { Component, OnInit } from '@angular/core';
import { HolderService } from '../../services/holder.service';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

  public holders;

  constructor(private holderService: HolderService) { }

  ngOnInit() {
    this.getHolders();
  }

  getHolders() {
    this.holderService.all().subscribe(
      data => { this.holders = data; },
      err => console.error(err)
    );
  }

  delete(id: number) {
    this.holderService.delete(id).subscribe(
      res => {
        this.holders = this.holders.filter(item => item.id !== id);
      },
      err => console.error(err)
    );
  }

}
