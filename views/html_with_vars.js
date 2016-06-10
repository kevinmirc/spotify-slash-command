<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="https://www.google.com/fonts/#ReviewPlace:refine/Collection:Roboto:100">

<style type="text/css">
      body {
        font-family: 'Roboto', serif;
      }
</style>

<div class="row">
  <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src=`${track.album.images[0].url}`>
      </div>
      <div class="card-content">
        <a href=`${track.external_urls.spotify}` target="_blank" class="card-title activator grey-text text-darken-4">`${track.name}`</a>
        if (track.explicit) {
          <i class="material-icons">&#xE01E;</i>
          <i class="material-icons right">&#xE037;</i>
        }

        track.artists.forEach((artist) => {
          <p><a target="_blank" href=`${artist.external_urls.spotify}`>`${artist.name}`</a></p>
        }
      </div>

      <div class="card-action">
        <a href=`${track.external_urls.spotify}` target="_blank" ><span style="color:#2ebd59;">Play on Spotify</span></a>
      </div>
    </div>
  </div>
</div>