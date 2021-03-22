function makeFileFromTemplate() {
  files = DriveApp.getFiles();
  while (files.hasNext()) {
    file = files.next()
    console.log(file.getName());
  }

}

