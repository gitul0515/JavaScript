{
  // Java: Exception
  // JavaScript: Error
  // Error(Exception) Handling: try -> catch -> finally
  function readFile(fileName: string): string {
    if (fileName === 'not exits!') {
      throw new Error('file not exits!');
    }
    return 'file contents'
  }

  function closeFile(fileName: string) {
    console.log('file closed');
  }
  
  (function run() {
    const fileName = 'not exits!';
    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log('catched!!');
      return;
    } finally {
      closeFile(fileName);
    }
  }());
}
