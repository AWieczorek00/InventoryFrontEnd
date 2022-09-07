import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InventoryDTO } from '../../../../application/ports/secondary/dto/inventory.dto';
import { InventoryContext } from '../../../../application/ports/secondary/context/inventory.context';
import { EquipmentDTO } from '../../../../application/ports/secondary/dto/equipment.dto';
import {
  GETS_ONE_INVENTORY_DTO,
  GetsOneInventoryDtoPort,
} from '../../../../application/ports/secondary/dto/gets-one-inventory.dto-port';
import {
  SELECTS_INVENTORY_CONTEXT,
  SelectsInventoryContextPort,
} from '../../../../application/ports/secondary/context/selects-inventory.context-port';
import {
  GETS_ALL_EQUIPMENT_DTO,
  GetsAllEquipmentDtoPort,
} from '../../../../application/ports/secondary/dto/gets-all-equipment.dto-port';
import {
  SETS_INVENTORY_DTO,
  SetsInventoryDtoPort,
} from '../../../../application/ports/secondary/dto/sets-inventory.dto-port';

@Component({
  selector: 'lib-one-inventory',
  templateUrl: './one-inventory.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./one-inventory.component.scss'],
})
export class OneInventoryComponent {
  inventory$: Observable<InventoryDTO> = this._selectsInventoryContext
    .select()
    .pipe(
      switchMap((contex) =>
        this._getsOneInventoryDto.getOne(contex.invenotryId as number)
      )
    );

  inventoryId$: Observable<Partial<InventoryContext>> =
    this._selectsInventoryContext.select();

  inventoryToUpdate$: Observable<EquipmentDTO[]> =
    this._getsAllEquipmentDto.getAll();

  equipmentToInventoryNew: EquipmentDTO[] = [];

  idInventory: number | undefined;

  readonly addInventory: FormGroup = new FormGroup({
    inventoryName: new FormControl(),
    inventoryNumber: new FormControl(),
  });

  constructor(
    @Inject(GETS_ONE_INVENTORY_DTO)
    private _getsOneInventoryDto: GetsOneInventoryDtoPort,
    @Inject(SELECTS_INVENTORY_CONTEXT)
    private _selectsInventoryContext: SelectsInventoryContextPort,
    @Inject(GETS_ALL_EQUIPMENT_DTO)
    private _getsAllEquipmentDto: GetsAllEquipmentDtoPort,
    @Inject(SETS_INVENTORY_DTO) private _setsInventoryDto: SetsInventoryDtoPort
  ) {
    this.inventory$.subscribe((inventory) => {
      this.equipmentToInventoryNew = inventory.equipment;
      this.addInventory.controls['inventoryName'].setValue(
        inventory.inventoryName
      );
      this.addInventory.controls['inventoryNumber'].setValue(
        inventory.inventoryNumber
      );
      this.idInventory = inventory.id;
    });
  }

  addArray(equipment: EquipmentDTO) {
    this.equipmentToInventoryNew?.push(equipment);
    console.log('equipmentToInventory', this.equipmentToInventoryNew);
  }

  onEquipmentDeleteClicked(equipment: EquipmentDTO) {
    this.equipmentToInventoryNew.forEach((element, index) => {
      if (element.id == equipment.id)
        this.equipmentToInventoryNew.splice(index, 1);
    });
  }

  onAddEquipemntClick(equipment: EquipmentDTO) {
    this.equipmentToInventoryNew.push(equipment);
  }

  onAddInventorySubmited(inventory: FormGroup) {
    this._setsInventoryDto
      .set({
        id: this.idInventory,
        inventoryName: inventory.get('inventoryName')?.value,
        inventoryNumber: inventory.get('inventoryNumber')?.value,
        equipment: this.equipmentToInventoryNew,
      })
      .subscribe();
    window.location.reload();
  }
}
