type NameOption = "Eric" | "Jon" | "Roberta";

let person: NameOption = "Eric";

export function printPerson(p: NameOption): void {
  console.log(p);
}

printPerson(person);
printPerson("Jon");
printPerson("Roberta");
