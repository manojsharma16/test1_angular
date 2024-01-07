import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { AddEditBlogComponent } from './add-edit-blog/add-edit-blog.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [AddEditBlogComponent, BlogComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ComponentsModule {}
