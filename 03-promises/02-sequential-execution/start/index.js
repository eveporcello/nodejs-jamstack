import fs from "fs";

const doStuffSequentially = () => {
  console.log("starting");
  setTimeout(() => {
    console.log("waiting");
    setTimeout(() => {
      console.log("waiting some more");
      fs.writeFile("file.txt", "Sample File...", error => {
        if (error) {
          console.error(error);
        } else {
          console.log("file.txt created");
          setTimeout(() => {
            fs.unlink("file.txt", error => {
              if (error) {
                console.error(error);
              } else {
                console.log("file.txt removed");
                console.log(
                  "\n\n sequential execution complete"
                );
              }
            });
          }, 3000);
        }
      });
    }, 2000);
  }, 1000);
};

doStuffSequentially();
