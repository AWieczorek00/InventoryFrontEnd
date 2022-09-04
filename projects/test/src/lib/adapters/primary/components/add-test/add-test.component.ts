import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({ selector: 'lib-add-test', templateUrl: './add-test.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTestComponent {


    typeOfEquipment: string = '';
    employeeId : number | undefined;
  
    selectChangeHandler(event: any) {
      //update the ui
      this.typeOfEquipment = event.target.value;
      console.log(this.typeOfEquipment);
  
    }
  
  
    
  
    onAddEquipmentSubmited(): void {
  
  
  
    //   this.employees$.pipe(map(employee => employee.find(employee => employee.id== 1)))
    //   console.log(equipment.get('dateOfPurchase')?.value);
    //   this._addsEquipmentDto
    //     .add({
    //       name: equipment.get('name')?.value,
    //       serialNumber: equipment.get('serialNumber')?.value,
    //       employee: {id:this.employeeId,name:"",surname:""},
    //       roomNumber: equipment.get('roomNumber')?.value,
    //       typeOfEquipment: this.typeOfEquipment,
    //       dateOfPurchase: equipment.get('dateOfPurchase')?.value,
    //     })
    //     .subscribe();
    //   window.location.reload();
    }
  
    selectEmployeeHandler(event:any){
    //   this.employeeId = event.target.value;
    //   console.log(event.target.value);
    }
  
}
