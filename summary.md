### Defining components & attributes
```html 
<!--components-->
<define component=component-name ...attrs="default value" >
  <!--access attrs from target or defaults-->
  ((component-name.attribute-name || fallbacks))
  <!--acces innerHtml of target-->
  ((component-name.value))
</define>
<!--attributes-->
<define attribute=attribute-name match="targets ( default * )">
  <!--attributes match any attr that sarts with attribute-name-->
  ((attribute-name.name))
  <!--value of attribute-->
  ((attribute-name.value))
</define>
```

---
### Events

```html
<!--inline-->
<e on.click="htmlString"/>
<!--inline scripts-->
<e on.click.script="jsString"/>
<!--script ids-->
<script #log>
  //access the event object using this.event
  console.log(this.event)</script>
<e on.click=log/>
  
  
```

---
### Imports

```html
<import libs="coma splitted urls" from="libs scope">splash screen</import>
<!-- Functionality
 + "from" attr defaults to previous scope or location.href
 + splash screen defaults to previous splash screen or ""
 + Supported extensions
   - html( html, xhtml, xml, [no extension] )
   - css( css, sass, scss, less )
   - js( js, jsx, ts, tsx, pi )
   - variable( json, xml, txt )
-->
```

---
### Scripts
```html
<!--async script-->
<script>
  //top level async await
  //echos html above itself in the parent
  echo("htmlString")
  //this is bound to the script parent
  this.color="blue"
</script>
<!--sync script-->
<script type=sync >
  //code
</script>
```
---
### Sugar
```html
<!-- ids -->
<e #id/>
<!-- classes -->
<e .class .bound.classes />
<!-- styles -->
<e -style=value ( -color=blue ) />
<!-- css variables -->
<e --vname=value ( --text=white ) />
<!-- css value shortcuts 
 + variables --vn = var(--vn)
 + urls are scoped to nearest scope or location.href
 -->
```

---
### Variables
```html
<!--create a variable
 + sync sync var changes to the storage passed, default none, values ( local | session | cookies | url )
 + Value is parsed as json (can result to string, bool, num, obj, arr )
 + var names must be lowercase and js compliant
-->
<create var=variableName sync="storage name (default none) values ( local | session | cookies | url )">value</create>
<!--sync variable to ui using from attribute
 + if is primitive type then access value using syntax ((variableName.value))
 + if object then access using syntax ((variableName.key))
 + if array then template is used for every item in the array
 -->
<e from=variableName > ((variableName.value))</e>
<!--set var data in js
 + this type of binding is passive, if the script finnishes executing, the new value is synced to the variable (changes made in timers wont be caught)
-->
<script>variablename="new value"</script>
<!--set var data-->
<v:variableName>new value</v:variableName>
<!--editing strings-->
<v:vn replace="replace this with value" replaceAll="replaces all matches of this with value" match="regex match this to replace with value - match can be accessed using ((match))" flags="regex flags" start="adds value to start" end="adds value to end">value</v:vn>
<!--editing numbers-->
<v:vn plus="current+value" minus="current-value" times="current*value" divide="current/value" random="0 to value" float="float value" round="round value down" roundup="round value up">value (default 1)</v:vn>
<!--editing objects-->
<v:vn key="path.to.target">value</v:vn>
<!--editing arrays-->
<v:vn push="push value" unshift="unshift value" index="set value at index" last="set value at last index">value</v:vn>
<!--editing bools-->
<v:vn toggle="toggle boolean value">double banged value</v:vn>
```