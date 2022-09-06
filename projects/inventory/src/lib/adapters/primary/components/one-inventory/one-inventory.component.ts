import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { InventoryDTO } from '../../../../application/ports/secondary/dto/inventory.dto';
import { InventoryContext } from '../../../../application/ports/secondary/context/inventory.context';
import {
  GETS_ONE_INVENTORY_DTO,
  GetsOneInventoryDtoPort,
} from '../../../../application/ports/secondary/dto/gets-one-inventory.dto-port';
import {
  SELECTS_INVENTORY_CONTEXT,
  SelectsInventoryContextPort,
} from '../../../../application/ports/secondary/context/selects-inventory.context-port';
import { EquipmentDTO } from 'projects/inventory/src/lib/application/ports/secondary/dto/equipment.dto';

@Component({
  selector: 'lib-one-inventory',
  templateUrl: './one-inventory.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneInventoryComponent {
  inventory$: Observable<InventoryDTO> = this._selectsInventoryContext
    .select()
    .pipe(
      switchMap((contex) =>
        this._getsOneInventoryDto.getOne(contex.invenotryId as number)
      ),
      
    );

  equipmentToInventory: EquipmentDTO[] = [];

  inventoryId$: Observable<Partial<InventoryContext>> =
    this._selectsInventoryContext.select();

  constructor(
    @Inject(GETS_ONE_INVENTORY_DTO)
    private _getsOneInventoryDto: GetsOneInventoryDtoPort,
    @Inject(SELECTS_INVENTORY_CONTEXT)
    private _selectsInventoryContext: SelectsInventoryContextPort
  ) {}

  addArray(equipment:EquipmentDTO){
    this.equipmentToInventory.push(equipment)
    console.log(this.equipmentToInventory)
  }
}
