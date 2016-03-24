# jsviews-includes

```
{{include tmpl='./test.html' /}}
```
result:
```
{Error: ENOENT: no such file or directory, open './test.html'}
```

–––
```
{{include tmpl='test.html' /}}
```

result:

![](http://i.imgur.com/KFGlSLA.png)
