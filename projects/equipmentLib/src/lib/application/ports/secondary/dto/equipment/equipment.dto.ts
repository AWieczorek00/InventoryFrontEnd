import { EmployeeDTO } from '../employee/employee.dto';

export interface EquipmentDTO {
  readonly id: number;
  readonly name: string;
  readonly serialNumber: string;
  readonly typeOfEquipment: string;
  readonly dateOfPurchase: Date;
  readonly roomNumber: number;
  readonly employee: EmployeeDTO;
  readonly repair: boolean;
}
