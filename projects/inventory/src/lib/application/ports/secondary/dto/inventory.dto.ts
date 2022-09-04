import { EquipmentDTO } from "./equipment.dto";

export interface InventoryDTO {
  readonly id: number;
  readonly inventoryNumber: number;
  readonly inventoryName : string;
  readonly dateOfCreation: Date;
  readonly equipment:EquipmentDTO[];
}
