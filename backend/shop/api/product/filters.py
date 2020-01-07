from django_filters import FilterSet, CharFilter, NumberFilter
from .models import Product,Feature,Category,Filter


class ProductFilter(FilterSet):
    min_price = NumberFilter(field_name="price", lookup_expr='gte')
    max_price = NumberFilter(field_name="price", lookup_expr='lte')
    title = CharFilter(field_name="title", lookup_expr='icontains')
    category = CharFilter(method="filter_category_title")
    features = CharFilter(method="filter_by_features")

    class Meta:
        model = Product
        fields = ['title','category','features', 'active', 'min_price', 'max_price']

    def filter_by_features(self, queryset, title, value):
        value_titles = value.split("|")
        for value_title in value_titles:
            titles = value_title.split(",")
            items = Feature.objects.filter(title__in=titles)
            queryset = queryset.filter(features__in=items)
        return queryset

    def filter_category_title(self, query, title, value):
        category = Category.objects.filter(title=value)
        return query.filter(category__in=category)

class FiltersFilter(FilterSet):   
    category = CharFilter(method="filter_category_title")    

    class Meta:
        model = Filter
        fields = ['category']    

    def filter_category_title(self, query, title, value):
        category = Category.objects.filter(title=value)
        return query.filter(category__in=category)