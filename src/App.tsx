import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Search, PlusCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "./components/ui/label";

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Produtos</h1>
      
      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="ID do pedido" className="w-auto" />
          <Input name="name" placeholder="Nome do produto" />
          <Button type="submit" variant={"link"}>
            <Search className="h-3 w-3 mr-2"/>
            Filtrar resultados
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="h-3 w-3 mr-2"/>
              Novo Produto
            </Button>
          </DialogTrigger>
        
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo Produto</DialogTitle>
              <DialogDescription>Criar um novo produto no sistema</DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-6 items-center text-right gap-3">
                <Label htmlFor="name">Produto</Label>
                <Input className="col-span-5" id="name" />
              </div>

              <div className="grid grid-cols-6 items-center text-right gap-3">
                <Label htmlFor="price">Preço</Label>
                <Input className="col-span-5" id="price" />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant={"destructive"}>Cancelar</Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-md p-2 ">
        <Table>
          <TableHeader >
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
              {Array.from({length: 21}).map((_, i) => {
                if(i > 0){
                return (
                  <TableRow key={i}>
                    <TableCell>{i}</TableCell>
                    <TableCell>Produto {i}</TableCell>
                    <TableCell>R$ 249,99</TableCell>
                  </TableRow>
                )
              }
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


