import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SingleFaceSnapComponent} from "./face-snaps/components/single-face-snap/single-face-snap.component";
import {FaceSnapListComponent} from "./face-snaps/components/face-snap-list/face-snap-list.component";
import {NewFaceSnapComponent} from "./face-snaps/components/new-face-snap/new-face-snap.component";
import {AuthGuard} from "./core/guards/auth.guard";


const routes: Routes = [
  { path: '', component: FaceSnapListComponent, canActivate: [AuthGuard]},
  { path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard]},
  { path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceSnapsRoutingModule {}
