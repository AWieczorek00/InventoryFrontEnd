import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EquipmentDTO } from '../../../../application/ports/secondary/dto/equipment.dto';
import { GETS_ALL_EQUIPMENT_DTO, GetsAllEquipmentDtoPort } from '../../../../application/ports/secondary/dto/gets-all-equipment.dto-port';
import { ADDS_INVENTORY_DTO, AddsInventoryDtoPort } from '../../../../application/ports/secondary/dto/adds-inventory.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-add-inventory',
  templateUrl: './add-inventory.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddInventoryComponent {
  equipments$: Observable<EquipmentDTO[]> = this._getsAllEquipmentDto.getAll();
  equipmentToInventory: EquipmentDTO[] = [];
  myDate = new Date();

  readonly addInventory: FormGroup = new FormGroup({
    inventoryName: new FormControl(),
    inventoryNumber: new FormControl(),
  });

  constructor(
    @Inject(GETS_ALL_EQUIPMENT_DTO)
    private _getsAllEquipmentDto: GetsAllEquipmentDtoPort,
    @Inject(ADDS_INVENTORY_DTO) private _addsInventoryDto: AddsInventoryDtoPort,
     private router:Router
  ) {}

  addEquipmentToNewArrayClicked(equipment: EquipmentDTO) {
    this.equipmentToInventory?.push(equipment);
  }

  onAddInvetorySubmited(inventory: FormGroup) {
    this._addsInventoryDto
      .add({
        dateOfCreation: this.myDate,
        inventoryName: inventory.get('inventoryName')?.value,
        inventoryNumber: inventory.get('inventoryNumber')?.value,
        equipment: this.equipmentToInventory,
      })
      .subscribe();
      this.router.navigate(['/inwetaryzacje']);
  }


  onEquipmentDeleteClicked(equipment:EquipmentDTO){
    this.equipmentToInventory.forEach((element,index)=>{
      if(element.id==equipment.id) this.equipmentToInventory.splice(index,1);
   });
  }

}

