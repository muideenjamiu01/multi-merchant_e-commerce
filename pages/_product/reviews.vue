<template>
  <div class="px-4">
    <h1 class="font-bold">
     49 Comments from verified purchases
      </h1>
      <ContentsReviews 
      :name='reviews.customerName'
      :comment='reviews.comment'
      :createdAt='reviews.createdAt'
      :customerAvatar='reviews.customerAvatar'
      :rating='reviews.rating'
      :id='reviews.id'
      />
  </div>
</template>
