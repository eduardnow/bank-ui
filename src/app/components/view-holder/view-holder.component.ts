import { Component, OnInit } from '@angular/core';
import { HolderService } from '../../services/holder.service';
import { ActivatedRoute } from '@angular/router';
import { Holder } from '../../models/Holder';

@Component({
  selector: 'app-view-holder',
  templateUrl: './view-holder.component.html',
  styleUrls: ['./view-holder.component.css']
})
export class ViewHolderComponent implements OnInit {

  public holder: Holder = new Holder();

  constructor(private holderService: HolderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHolder(this.route.snapshot.params.id);
  }

  getHolder(id: number) {
    this.holderService.get(id).subscribe(
      data => this.holder = data,
      err => console.error(err)
    );
  }

}
