import { Component } from '@angular/core';

interface IDependency {
    title: string;
    description: string;
    dependencies: string[];
}

@Component({
  selector: 'app-dependencies',
  templateUrl: './dependencies.component.html',
  styleUrls: ['./dependencies.component.scss']
})
export class DependenciesComponent {
    openedItemIndex: number | undefined;

    items: Partial<IDependency>[] = [
        { 
            title: 'Lab 07',
            dependencies: [
                'assets/dependencies/lab_07/cancer.pdf',
                'assets/dependencies/lab_07/mytree.dot',
                'assets/dependencies/lab_07/ram_price.csv',
                'assets/dependencies/lab_07/tmp',
                'assets/dependencies/lab_07/tmp.png',
                'assets/dependencies/lab_07/tree.dot',
            ]
        }
    ];

    constructor() { }

    downloadFromAsset(depsPath: string): void {
        if(!depsPath) { return }

        const filename: string = depsPath.split('/')[depsPath.split('/').length - 1];

        let link = document.createElement("a");
        link.download = filename;
        link.href = depsPath;

        link.click();
    }
}
