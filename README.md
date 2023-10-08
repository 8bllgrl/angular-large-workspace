# Projects within one workspace

---

---

[Multiple Angular Apps in Single Project | How to create multiple projects in one workspace?](https://www.youtube.com/watch?v=kQ6X6fksBTg&t=380s)

## Opening a project like this

![Untitled](Projects%20within%20one%20workspace%2075feb40089fd4cbf8dc3c3e5ba858350/Untitled.png)

### `PS D:\javascript\angular\2023_projects\workspace-2023>`

## Serving a project within a workspace

```jsx
PS D:\javascript\angular\2023_projects\workspace-2023>
```

and run

```jsx
ng serve project1
```

It will actually serve the project 2 levels deep!

```jsx
PS D:\javascript\angular\2023_projects\workspace-2023\projects\project1>
```

![Untitled](Projects%20within%20one%20workspace%2075feb40089fd4cbf8dc3c3e5ba858350/Untitled%201.png)

---

## Generating a component for a project

```jsx
ng g c components/comp1 --project="project1"
```

This creates a new component.

### Proof:

```jsx
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

![Untitled](Projects%20within%20one%20workspace%2075feb40089fd4cbf8dc3c3e5ba858350/Untitled%202.png)

### How many levels deep:

```jsx
CREATE projects/project1/src/app/components/comp1/comp1.component.html (20 bytes)
CREATE projects/project1/src/app/components/comp1/comp1.component.spec.ts (592 bytes)
CREATE projects/project1/src/app/components/comp1/comp1.component.ts (198 bytes)
CREATE projects/project1/src/app/components/comp1/comp1.component.css (0 bytes)
UPDATE projects/project1/src/app/app.module.ts (482 bytes)

PS D:\javascript\angular\2023_projects\workspace-2023> cd .\projects\
PS D:\javascript\angular\2023_projects\workspace-2023\projects> cd .\project1\
PS D:\javascript\angular\2023_projects\workspace-2023\projects\project1> cd .\src\
PS D:\javascript\angular\2023_projects\workspace-2023\projects\project1\src> cd .\app\
PS D:\javascript\angular\2023_projects\workspace-2023\projects\project1\src\app> cd .\components\
PS D:\javascript\angular\2023_projects\workspace-2023\projects\project1\src\app\components>
```

It's a total of 7 levels deep from the initial "workspace" folder to the "components" folder where you ended up:

1. workspace-2023
2. projects
3. project1
4. src
5. app
6. components
7. comp1 (current directory)

Each level represents a subdirectory or folder within the previous level.

### Can you share components?

> To my knowledge, we won't be able to use `comp1` from `app1` in `app2`. Because, *its not shareable* and so it would be bad practice to use components in such a way. For shareable components/services, you can take a look at creating a library type project in angular. 
Some links that might be helpful to you:
> 
> 
> [https://angular.io/guide/file-structure#library-project-files](https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbjdfQkFKMDJUSy1DVDc0S05QUkQwaUlDNkVqUXxBQ3Jtc0trdVNNZVJZZ0I2UzkycjBVSEF2aFp1ZE9SaXNYMnNaS1dzRW1kUHhiVW1zZHhkVTAzeUdUVzRHQmFudmVjZ1dhQjFIQUJaaS1PZG1sYUt2ZWx4dkJPcC1vRnhjMERicXZGdnRYS2ZXWFlzQzlYTXpXRQ&q=https%3A%2F%2Fangular.io%2Fguide%2Ffile-structure%23library-project-files&stzid=Ugwg9A6lrmBrOCotCfF4AaABAg.9oJt3uTUml19tYhDwmfKDw)
> 
> [https://octoperf.com/blog/2019/08/22/kraken-angular-workspace-multi-application-project/#serving-production-images-with-haproxy](https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqazB6aVlmdXBpSVZlZEJJbkppMGZfR2xfUk5OUXxBQ3Jtc0tueVFCTWhzc1ZBZXBrM1g1X0QzbTVGeDFTNXFHU3VVUFg1RzFDaU12Tm5nOTJIRFBNeUIxVGdTNWlyQjR1MjhrWGpFOThJZ3Voc3h6ZkFHM2RWcFB0eUM4MnlndXI3YlZMRnB0c2t3ZEItMGFGdk1FUQ&q=https%3A%2F%2Foctoperf.com%2Fblog%2F2019%2F08%2F22%2Fkraken-angular-workspace-multi-application-project%2F%23serving-production-images-with-haproxy&stzid=Ugwg9A6lrmBrOCotCfF4AaABAg.9oJt3uTUml19tYhDwmfKDw)
> 

## Creating the workspace

```jsx
ng new workspace-name --create-application false
```

## Creating a new project inside the workspace

(inside workspace-name dir)

```jsx
ng g application my-app-name
```
