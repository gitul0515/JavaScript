{
  // Intersection Types: &
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name);
    console.log(person.score);
    console.log(person.employeeId);
    person.work();
  }

  internWork({
    name: 'seho',
    score: 10,
    employeeId: 1199,
    work: () => {}
  });
}