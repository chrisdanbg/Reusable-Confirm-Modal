# **Reusable Confrim Modal**
 
It's important to mark the item as "delete" class.

The JS code creates a POST request to the Delete action should be POST

_Parameters:_

```sh
class="delete" - _Required_
data-controller - _The controller that holds the action that will be executed on confirm._
data-action - _The Action that will be executed on confirm._
data-header-type = _The Type Name that will be put in the header - e.g. "Delete Item"_
data-item-Name = _The Type Name that will be displayed in the following LynxAlert notification - e.g. "Item Deleted Successfully"
data-body-message = _The Text confirmation message that will be shown on modal open_.
```
_Sample Code:_

```sh
<a class="delete" data-id="@item.ID"
  data-controller="Target" 
  data-action="Delete"
  data-header-type="Delete Target" 
  data-item-Name="Target"
  data-body-message="Are you sure you want to delete this?
This action is final and the item cannot be restored!"> 
</a>
```
_Screenshot:_
======
![deleteModal.JPG](https://i.imgur.com/bRgB4eP.jpg)
