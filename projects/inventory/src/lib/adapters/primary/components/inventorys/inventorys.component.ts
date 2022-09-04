import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryDTO } from '../../../../application/ports/secondary/dto/inventory.dto';
import { GETS_ALL_INVENTORY_DTO, GetsAllInventoryDtoPort } from '../../../../application/ports/secondary/dto/gets-all-inventory.dto-port';
import { REMOVES_INVENTORY_DTO, RemovesInventoryDtoPort } from '../../../../application/ports/secondary/dto/removes-inventory.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-inventorys',
  templateUrl: './inventorys.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./inventorys.component.scss'],
})
export class InventorysComponent {
  allInventory$: Observable<InventoryDTO[]> =
    this._getsAllInventoryDto.getAll();

  details: boolean = false;

  constructor(
    @Inject(GETS_ALL_INVENTORY_DTO)
    private _getsAllInventoryDto: GetsAllInventoryDtoPort,
    private router: Router, @Inject(REMOVES_INVENTORY_DTO) private _removesInventoryDto: RemovesInventoryDtoPort
  ) {}

  onMoreDetailsClicked() {
    if (!this.details) {
      this.details = true;
    } else {
      this.details = false;
    }
  }

  moveToNewInventoryClicked() {
    this.router.navigate(['/nowa-inwentaryzacja']);
  }



  onInventoryDeleteClicked(inventory: InventoryDTO): void {
    this._removesInventoryDto.remove(inventory).subscribe();
    window.location.reload();
  }
}
