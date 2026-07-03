const fs = require('fs');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = dir + '/' + file;
    try {
      filelist = fs.statSync(dirFile).isDirectory()
        ? walkSync(dirFile, filelist)
        : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'ENOENT' || err.code === 'EACCES') return;
    }
  });
  return filelist;
};

const files = [...walkSync('./components'), ...walkSync('./app')].filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

let changed = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/(?<!dark:)bg-jmc-navy/g, 'bg-gray-50 dark:bg-jmc-navy');
  content = content.replace(/(?<!dark:)text-white/g, 'text-jmc-navy dark:text-white');
  
  // Specific fix for text-white in buttons that should remain white
  content = content.replace(/bg-jmc-dark-green hover:bg-jmc-green text-jmc-navy dark:text-white/g, 'bg-jmc-dark-green hover:bg-jmc-green text-white');
  content = content.replace(/bg-jmc-dark-green hover:bg-\[\#15803d\] text-jmc-navy dark:text-white/g, 'bg-jmc-dark-green hover:bg-[#15803d] text-white');
  content = content.replace(/bg-jmc-green text-jmc-navy dark:text-white/g, 'bg-jmc-green text-white');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changed++;
    console.log('Updated', file);
  }
}
console.log(`Updated ${changed} files.`);
