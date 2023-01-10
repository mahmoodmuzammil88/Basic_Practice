// function sort(arr){
//     let n = arr.length;

//     for(let i=0;i<n-1;i++){
//         let min = i;
//         for(let j=i+1;j<n;j++){
//             if(a[j]<a[min]){
//                 min = j;
//             }
//         }
//         let temp = a[min];
//         a[min]=a[i]
//         a[i]=temp
//     }
// }console.log(sort([1,5,2,4,6,7]))

// static void mergesort(int[] a, int l, int h){
//     if(l<h){
//         int mid = (l + h) / 2;
//         mergesort(a, l, mid);
//         mergesort(a, mid+1, h);
//         merge(a,l,mid,h);
//     }

// }
// static void merge(int[] a, int l, int mid, int h){
//     int[] b = new int[a.length];
//     int i = l;
//     int j = mid+1;
//     int k = l;

//     while(i <= mid && j <= h){
//         if(a[i] <= a[j]){
//             b[k] = a[i];
//             i++;
//             k++;
//         }else{
//             b[k] = a[j];
//             j++;
//             k++;
//         }
//     }
//     if(i > mid){
//         while(j <= h){
//             b[k] = a[j];
//             j++;
//             k++;
//         }
//     }else{
//         while(i <= mid){
//             b[k] = a[i];
//             i++;k++;
//         }
//     }

//     for(i = l; i <=h; i++){
//         a[i] = b[i];
//     }
// }