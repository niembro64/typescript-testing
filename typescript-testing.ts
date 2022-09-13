type PeopleOptions = "Eric" | "Jon" | "Roberta";

let person: PeopleOptions = "Eric";

export function printPerson(p: PeopleOptions): void {
  console.log(p);
}

printPerson(person);
printPerson("Jon");
printPerson("Roberta");
