import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Car, CarCard } from "./car-card";
import { CarForm } from "./car-form";
import { Plus } from "lucide-react";

interface AdminPanelProps {
  cars: Car[];
  onAddCar: (car: Omit<Car, "id">) => void;
  onEditCar: (car: Car) => void;
  onDeleteCar: (id: string) => void;
}

export function AdminPanel({ cars, onAddCar, onEditCar, onDeleteCar }: AdminPanelProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | undefined>();

  const handleEdit = (car: Car) => {
    setEditingCar(car);
    setIsDialogOpen(true);
  };

  const handleSubmit = (carData: Omit<Car, "id"> & { id?: string }) => {
    if (carData.id) {
      onEditCar(carData as Car);
    } else {
      onAddCar(carData);
    }
    setIsDialogOpen(false);
    setEditingCar(undefined);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
    setEditingCar(undefined);
  };

  const handleAddNew = () => {
    setEditingCar(undefined);
    setIsDialogOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">Inventory Management</h2>
          <p className="text-gray-600 mt-1">Manage your vehicle listings</p>
        </div>
        <Button onClick={handleAddNew} className="gap-2">
          <Plus className="size-4" />
          Add Vehicle
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onEdit={handleEdit}
            onDelete={onDeleteCar}
            isAdminView={true}
          />
        ))}
      </div>

      {cars.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No vehicles in inventory</p>
          <Button onClick={handleAddNew}>Add Your First Vehicle</Button>
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingCar ? "Edit Vehicle" : "Add New Vehicle"}
            </DialogTitle>
          </DialogHeader>
          <CarForm
            car={editingCar}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
